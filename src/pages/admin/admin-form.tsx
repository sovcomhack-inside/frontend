import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchAPI } from 'shared/api/network'
import { BlueButton } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import '../../input.css'

interface LoginFormProps extends React.HTMLProps<HTMLDivElement> {
  onButtonClick?: () => void
}

export const AdminForm: React.FC<LoginFormProps> = (props) => {
  const { className, ...rest } = props
  const navigateTo = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      secret: e.currentTarget.secret.value,
    }
    fetchAPI.post("/api/v1/admin/login", data).then(() => navigateTo("/admin/manage"))
  }

  return (
    <div {...rest}>
      <form className='flex flex-col py-4 place-items-center align-items-center gap-2' onSubmit={onSubmit}>
        <div>
          <Input type="password"
            name="secret"
            placeholder="secret"
          />
        </div>
        <BlueButton
          type="wide"
          value="Войти"
          onClick={props.onButtonClick}
        />
      </form>
    </div>
  )
}
