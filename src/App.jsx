import { Post } from './components/Post.jsx'
import { Header } from './components/Header.jsx'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar.jsx'

const posts = [
  {
    id : 1,
    author : {
      avatarUrl: 'https://avatars.githubusercontent.com/u/763676?v=4',
      name: 'João Alves',
      role: 'Java Developer'
    },
    content : [
      { type: 'paragraph', content: 'fala galera 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-07-28 20:00:00'),
  },

  {
    id : 2,
    author : {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rockeatseat'
    },
    content : [
      { type: 'paragraph', content: 'Olá Queridos 👋'},
      { type: 'paragraph', content: 'Tem mais uma aula que acabei de gravar. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignite Feed 🚀'},
      { type: 'link', content: 'Mayk.design/projeto-ignite-feed'}
    ],
    publishedAt: new Date('2023-08-10 08:00:00'),
  },
];

export function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
           return (
             <Post 
               key={post.id}
               author={post.author}
               content={post.content}
               publishedAt={post.publishedAt}  
             />
           )
          })
        }
      </main>
    </div>
    </>
  )
}

