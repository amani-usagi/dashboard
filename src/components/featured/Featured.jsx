import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Featured = () => {
	return (
		<div className='featured'>
			<div className="top">
				<h1 className="title">Total Revenue</h1>
				<MoreVertIcon fontSize='small' />
			</div>
			<div className="bottom">
				<div className="featuredChart">
					<CircularProgressbar value={67} text={'67%'} strokeWidth={5}/>
				</div>
				<p className="title">Total Sales</p>
				<p className="amount">$420</p>
				<p className="desc">
					Responsible for selling products and meeting customer needs while obtaining orders from existing or potential sales outlets.
				</p>
				<div className="summary">
					<div className="item">
						<div className="itemTitle">Target</div>
						<div className="itemResult positive">
							<ArrowDropUpOutlinedIcon fontSize='small'/>
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
					<div className="item">
						<div className="itemTitle">Last Week</div>
						<div className="itemResult negative">
							<ArrowDropDownIcon fontSize='small'/>
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
					<div className="item">
						<div className="itemTitle">Last Month</div>
						<div className="itemResult positive">
							<ArrowDropUpOutlinedIcon fontSize='small'/>
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
