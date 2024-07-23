export default function Note({myData}){
  console.log(myData);
    return(
      <div className="note">
        <h1>{myData.title}</h1>
        <p>{myData.content}</p>
      </div>
      )
  }
  