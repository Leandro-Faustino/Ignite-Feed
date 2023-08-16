import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);
  
  function handleLikeComment() {
    setLikeCount(likeCount + 1); 
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }
   return (
     <div className={styles.comment}>
       <Avatar 
         src="https://avatars.githubusercontent.com/u/20112?v=4" 
         hasBorder={false}
       />
       <div className={styles.commentBox}>
         <div className={styles.commentContent}>
           <header>
            <div className={styles.authorAndTime}>
               <strong>Marcelo Silva</strong>
               <time title='11 de maio ás 08:13h' dateTime='2022-05-11 08:23:43'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentários">
               <Trash size={24}/> 
            </button>
            
           </header>
           <p>{content}</p>
       </div>
      
       <footer>
         <button onClick={handleLikeComment}>
           <ThumbsUp />
           Aplaudir <span>{likeCount}</span>
         </button>
       </footer>
     </div>
     </div>
   )
}