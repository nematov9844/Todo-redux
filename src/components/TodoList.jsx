import { useSelector, useDispatch } from 'react-redux'
import { deleteData, editData } from '../redux/todoSlice'
import { useState } from 'react'

function TodoList() {
    const { data } = useSelector((state) => state.todoList)
    const dispatch = useDispatch()
    const [editId, setEditId] = useState(null)
    const [editValue, setEditValue] = useState('')

    const handleEditClick = (id, currentValue) => {
        setEditId(id)
        setEditValue(currentValue)
    }

    const handleSaveEdit = (id) => {
        dispatch(editData({ id, todo: editValue }))
        setEditId(null)
        setEditValue('')
    }

    const handleCancelEdit = () => {
        setEditId(null)
        setEditValue('')
    }

    return (
        <ul className='flex flex-col gap-4 items-start mt-5'>
            {data.map(item => (
                <li key={item.id} className='grid grid-cols-3 w-full gap-4'>
                    {editId === item.id ? (
                        <>
                            <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                className='max-w-[100px] px-2 py-1 border rounded-md'
                            />
                            <button
                                onClick={() => handleSaveEdit(item.id)}
                                className=' px-2 py-1 bg-green-500 text-white rounded'
                            >
                                Saqlash
                            </button>
                            <button
                                onClick={handleCancelEdit}
                                className='px-2 py-1 bg-red-500 text-white rounded'
                            >
                                Bekor qilish
                            </button>
                        </>
                    ) : (
                        <>
                            <span>{item.todo}</span>
                            <button
                                onClick={() => handleEditClick(item.id, item.todo)}
                                className='px-2 py-1 bg-yellow-500 text-white rounded'
                            >
                                Tahrirlash
                            </button>
                            <button
                                onClick={() => dispatch(deleteData(item.id))}
                                className='px-2 py-1 bg-red-500 text-white rounded'
                            >
                                O‘chirish
                            </button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default TodoList
