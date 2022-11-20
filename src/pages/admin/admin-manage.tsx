import { User } from 'features/auth/api/types'
import React, { FormEvent } from 'react'
import { useAsyncValue } from 'react-router-dom'
import { fetchAPI, withQuery } from 'shared/api/network'
import { UserModel } from 'shared/model'
import { Input, WhiteButton } from 'shared/ui'
import { Button } from 'shared/ui/Button/style.module.scss'
import '../../index.css'

interface LoginFormProps extends React.HTMLProps<HTMLDivElement> {
  onButtonClick?: () => void
}

export const AdminManagePage: React.FC = (props) => {
  const [unapprovedUsers, setUnapprovedUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    const data = { status: "pending_approve" };
    fetchAPI.post<any>("/api/v1/admin/list_users", data).then((response) => {
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
      {user.firstName} {user.lastName} | {user.email} | user id = {user.id}
    </div>
  }

  const banUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetchAPI.post<any>("/api/v1/admin/list_users", { email_in: [e.currentTarget.email.value] });
    fetchAPI.post("/api/v1/admin/update_user_status", { id: response.users[0].id, status: "banned" })
  }

  return <div className='flex flex-col gap-8'>
    <div className='flex flex-col mt-8 mx-auto place-items-center h-full gap-2'>
      <div className='text-lg font-bold'>Неподтвержденные пользователи</div>
      {unapprovedUsers.length > 0 ? unapprovedUsers?.map(mapUser) : "пусто"}
    </div>
    <div>
      <form className='flex flex-col gap-2 place-items-center' onSubmit={banUser}>
        <div>
          <Input type="email"
            name="email"
            placeholder="email"
          />
        </div>
        <WhiteButton
          type="wide"
          value="Заблокировать"
        />
      </form>
    </div>
  </div>
}
