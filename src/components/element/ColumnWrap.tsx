const ColumnWrap = ({ column }) => {
  return (
    <div className={`column-wrap columns${column.index}`} >
      {column.map((column: any) => (
        <div className="column" key={column.id}>
          <img src={column.src} alt={`img${column.id}`} className="column-item" />
        </div>
      ))}
    </div>
  )
}

export default ColumnWrap