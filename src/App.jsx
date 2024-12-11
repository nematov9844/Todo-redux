import './App.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { gedData } from './redux/todoSlice'
import TodoList from './components/TodoList'

function App() {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const submit = (data) => {
    dispatch(gedData({ id: Date.now(), todo: data.todo }))
    reset()
  }

  return (
    <div className=' flex flex-col justify-start'>
      <form onSubmit={handleSubmit(submit)} className='w-[300px] flex items-center'>
        <div>
          <input
            {...register("todo", { required: "Iltimos yozuvni kiriting" })}
            type="text"
            className='py-2 px-2 rounded-md'
            placeholder='Todo kiriting'
          />
          {errors.todo && <p className='text-red-500'>{errors.todo.message}</p>}
        </div>
        <button className='ml-2 px-3 py-2 bg-blue-500 text-white rounded'>Yuborish</button>
      </form>
      <TodoList />
    </div>
  )
}

export default App
