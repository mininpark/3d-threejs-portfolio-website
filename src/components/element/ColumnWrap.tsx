const ColumnWrap = ({ column }) => {
  console.log(column);
  return (
    <div className={`column-wrap columns${column.index}`} >
      {column.map((column: any) => (
        <div className="column">
          <img src={column.src} alt={`img${column.id}`} className="column-item" />
        </div>
      ))}
    </div>
  )
}

export default ColumnWrap