import React from 'react'

interface Props {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

function Contact(props: Props) {
  console.log(props);
  return (
    <div>
      <input 
        type="text"
        name="name"
        onChange={props.onChange}
        value={props.value} 
      />
    </div>
  )
}

export default Contact