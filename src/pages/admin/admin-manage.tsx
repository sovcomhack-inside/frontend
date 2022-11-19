import { User } from 'features/auth/api/types'
import React from 'react'
import { useAsyncValue } from 'react-router-dom'
import { fetchAPI, withQuery } from 'shared/api/network'
import { UserModel } from 'shared/model'
import '../../index.css'

interface LoginFormProps extends React.HTMLProps<HTMLDivElement> {
  onButtonClick?: () => void
}

export const AdminManagePage: React.FC = (props) => {
  const [unapprovedUsers, setUnapprovedUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    const data = { status: "pending_approve" };
    fetchAPI.get<any>(withQuery("/api/v1/admin/list_users", data)).then((response) => {
      setUnapprovedUsers(response.users as User[]);
    })
  }, [])

  const approveUser = (userId: number) => () => {
    fetchAPI.post("/api/v1/admin/update_user_status", { id: userId, status: "approved" }).then(() => {
      setUnapprovedUsers(unapprovedUsers.filter((user) => user.id !== userId))
    })
  }

  const mapUser = (user: User) => {
    return <div className='bg-neutral-900 px-8 py-2 rounded-sm hover:bg-neutral-800 hover:cursor-pointer' onClick={approveUser(user.id)}>
      {user.id}
    </div>
  }

  return <div>
    <div className='flex flex-col mt-8 mx-auto place-items-center h-full gap-2'>
      <div>Users Pending Approve</div>
      {unapprovedUsers?.map(mapUser)}
    </div>
  </div>
}