type WindowWithTg = typeof window & {
  Telegram: any
}

const tg = (window as WindowWithTg).Telegram.WebApp

export function useTelegram() {
  const onClose = () => {
    tg.close()
  }

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }

  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
  }
}
