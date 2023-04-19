import React, { useState}from "react"

const Todo = ({items,setItems,deleteItem}) =>{
    const [newType, setNewType] = useState("")
    const [newItem, setNewItem] = useState("")
    const [itemEdit, setItemEdit] = useState(null);
    const [editText, setEditText] = useState("");

    function addItem(){
        if(!newItem){
            return alert("Error")
        }

        const item = {
            id: Math.random(),
            value: newItem,
            type: newType
        }

        setItems([...items,item])
        setNewItem("")

    }

    function editItem(id) {
        const updatedItem = [...items].map((item) => {
          if (item.id === id) {
            item.value = editText
          }
          return item
        })
        setItems(updatedItem)
        setItemEdit(null)
      }
    
    
    return (
        <div className="todo">
            <div className="container">
                <div className="todo_block">
                    <div className="todo_main">
                        <div className="todo_content">
                            <h1>Todo список</h1>
                                <input
                                    type="text" 
                                    placeholder="Введите элемент"
                                    value={newItem}
                                    onChange={(e)=>setNewItem(e.target.value)}
                                />
                                <select value={newType} onChange={(e)=>setNewType(e.target.value)} >
                                    <option >---Выберете тип---</option>
                                    <option value="reminder">Напоминание</option>
                                    <option value="event">Мероприятие</option>
                                    <option value="task">Задача</option>
                                </select>
                                <button onClick={(e)=>addItem()}>Добавить</button>
                               
                                {
                                    items.map(item =>(

                                            <span className="page_text" key={item.id}>
                                            {item.id === itemEdit
                                            ? 
                                            (<input
                                                type="text"
                                                onChange={(e) => setEditText(e.target.value)}
                                            />) 
                                            : 
                                            (<p>{item.value}</p>)
                                            }
                                            {
                                            item.id === itemEdit 
                                            ? 
                                            (<button onClick={() => editItem(item.id)}>Сохранить</button>) 
                                            : 
                                            (<button onClick={() => setItemEdit(item.id)}>Редактировать</button>)
                                            }
                                            <button onClick={() => deleteItem(item.id)}>Удалить</button>
                                            </span>
                                        
                                    ))
                                }
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Todo