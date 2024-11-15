import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      className={`border border-gray-300 rounded-md p-3 w-full resize-none ${className}`}
      {...props}
    />
  )
}

export default Textarea
