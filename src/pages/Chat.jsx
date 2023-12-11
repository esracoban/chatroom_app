import React from 'react'

const Chat = ({room, setRoom}) => {
  const handleSubmit = (e) =>{
    const text = e.target[0].value;
  };
  return (
    <div className='chat'>
     <header>
      <p className="user">Kullanıcı Adı</p>
      <p>{room}</p>
      <a onClick={() => setRoom(null)}>Farklı Oda</a>
     </header>

     <main>Mesajlar</main>

     <form onSubmit={handleSubmit}>
      <input required placeholder='mesajınızı yazınız...' type="text" />
      <button>Gönder</button>
     </form>
    </div>
  )
}

export default Chat
