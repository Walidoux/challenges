import CrossIcon from './../assets/icon-cross.svg'

export default function Todo({
  description,
  isChecked,
  handleRemove,
  handleCompleted
}) {
  return (
    <li className='section__todolist-list_items--item'>
      <div className='section__todolist-list_items--item---container'>
        <input
          type='checkbox'
          name='todoChecker'
          className='item-container_checkerInput'
          onChange={handleCompleted}
          checked={isChecked}
        />
        <p className={`item-container_todoText ${isChecked && 'checked'}`}>
          {description}
        </p>
        <button onClick={handleRemove} className='item-container_closeButton'>
          <img src={CrossIcon} alt='Close Button Icon' />
        </button>
      </div>
    </li>
  )
}
