const SubText = ({ text }) => {
  return (
    <div className="subtext">
      {text.map((text: any, i: number) => (
        <div className="subtext-container" key={i}>
          <h3 className="subtext-small">{text.subTitle}</h3>
          <p className="subtext-main">{text.mainTitle}.</p>
          <p className="subtext-inhalt">{text.text}</p>
        </div>
      ))}
    </div>
  )
}

export default SubText