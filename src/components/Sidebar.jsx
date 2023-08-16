import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
   return(
      <aside className={styles.sidebar}>
        <img 
           className={styles.cover}
           src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
        
        <div className={styles.profile}>
          <Avatar src='https://avatars.githubusercontent.com/u/2254731?v=4'/>       
          <strong>Diego Fernandez</strong>
          <span>CTO RocketSeat</span>
        </div>
        <footer>
         <a href="#">
            <PencilLine size={20} />
            Editar ser perfil
         </a>
        </footer>
      </aside>
   )
}