import { PlayArrow } from '@mui/icons-material'
import './play.scss'

interface PlayProps {
    title: string
}
function Play(props: PlayProps){
    const {title} = props

    let search = 'https://letmegooglethat.com/?q=' + title.replace(/\s+/g, '+');
    
    return ( 
        <div className={'play-button'}>
               <a target="_blank" href={search} ><PlayArrow />Play...?</a>
        </div>
    )
}
export default Play 