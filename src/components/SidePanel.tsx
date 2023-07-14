import SlidingPanel from "react-sliding-side-panel";
import {Button} from "react-bootstrap";

import './SidePanel.scss'

const SidePanel = ({title, openPanel, handleClose, children}) => {
    return (
        <SlidingPanel type='right' size={42} isOpen={openPanel} backdropClicked={() => handleClose()} >
            <div className='side-panel'>
                <div className='side-panel-title d-flex flex-row justify-content-between align-items-right'>
                    <h5>{title}</h5>
                    <Button className='bg-transparent border-0' onClick={() => handleClose()}>
                        <i className='bi bi-x' />
                    </Button>
                </div>
                <div className='side-panel-content'>{children}</div>
            </div>
        </SlidingPanel>
    )
}

export default SidePanel;