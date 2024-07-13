import { StarRounded, FavoriteRounded, ShareRounded } from '@mui/icons-material'
import './actions.scss'

function Actions(){
    return ( 
        <div className={'main-movie-actions'}>
                <StarRounded className={'star'}/>
                <FavoriteRounded className={'heart'}/>
                <ShareRounded className={'share'}/>
        </div>
    )
}
export default Actions 