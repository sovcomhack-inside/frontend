import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchAPI } from 'shared/api/network'
import { BlueButton } from 'shared/ui/Button'
import { LockIcon } from 'shared/ui/Icons'
import { Input, WithIconInput } from 'shared/ui/Input'
import '../../index.css'

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
      <form className='flex flex-col place-items-center' onSubmit={onSubmit}>
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
