import './listItem.scss';
import Card from '../../assets/card.jpg';
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbDownOutlined,
} from '@material-ui/icons';

export default function ListItem() {
  return (
    <div className="listItem">
      <img src={Card} alt="card" />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbDownAltOutlined />
          <ThumbDownOutlined />
        </div>
      </div>
    </div>
  );
}
