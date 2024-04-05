import { ComponentProps } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {
  isTransparent?: boolean
}

export function IconButton({ isTransparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={
        isTransparent
          ? 'bg-black/20 border border-white/10 rounded-md p-1.5'
          : 'bg-white/10 border border-white/10 rounded-md p-1.5'
      }
    />
  )
}
