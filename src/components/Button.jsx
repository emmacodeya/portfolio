function Button({
  children,
  variant = "primary",
  href,
  target = "_self",
  onClick
}) {

  const className = `app-btn app-btn-${variant}`

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button