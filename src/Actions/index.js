export const myTodo = (items)=>{
    return{
        type:'DATA_CREATED',
        payload:items
    }
}
export const newTodo= (items)=>{
    console.log("at actions", items)
    return{
        type:'ITEM_ADDED',
        payload:items
    }
}
export const statusChange =(payload,index)=>{
    return{
        type: 'STATUS_CHANGED',
        payload,
        index
    }
}


export const changeIndex =(payload,index) =>(
    {
        type:'CHANGE_INDEX',
        payload,
        index
    }
)

export  const removeIndex = (index)=>(
    {
        type:'REMOVE_INDEX',
        index
}
)

export  const isEdit = (index)=>(
    {
        type:'EDIT_INDEX',
        index
}
)

export const changeTitle =(payload,index) =>(
    {
        type:'TITLE_CHANGED',
        payload,
        index
    }
)
export const  changeSelect = (index) =>(
    {
        type:'SELECT_CHANGED',
        index
    }
)