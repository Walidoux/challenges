export interface FooterProps {
  className?: string
  classNameLinks: string
}

declare function invokeNative(type: 'openUrl', url: string): void

export const Footer: React.FC<FooterProps> = (props) => {
  const { classNameLinks, className } = props

  const handleRedirection = (url: string): void => {
    return [window as unknown].invokeNative('openUrl', `${url}`)
  }

  return (
    <footer className={className}>
      <a href='#' className={classNameLinks}>
        Mot de passe oublié ?
      </a>
      <a
        href='#'
        className={classNameLinks}
        onClick={() => handleRedirection('https://discord.gg/JYhCxSCh')}>
        Je souhaite m&apos;inscrire
      </a>
    </footer>
  )
}
