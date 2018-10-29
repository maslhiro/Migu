import {
    Provider,
    Subscribe,
    Container
} from 'unstated';
import data from '../data/data';
type ListImageState = {
    data: object,
    isSelected: object

};

class ListImageContainer extends Container < ListImageState > {
   
    constructor(props)
    {
        super(props)
        this.state = {
            data: data,
            isSelected: null
    
        };
    }
  
    getList_State = () => {
        let objReturn = {
            data: this.state.data,
            isSelected: this.state.isSelected
        }
        return objReturn
    }

    setImg_Seclected = (newState) => {
        let {
            isSelected
        } = newState

        if (isSelected) {
            this.setState({
                isSelected: isSelected
            }, () => {
                console.log("Is Selected - Update !")
            })
            return true
        }
        return false
    }

    randomList_Data = () => {
        let newData = this.state.data.sort(() => { return (0.5 - Math.random()) });
        this.setState(
            {
                data: newData
            },
            () => 
            {
                console.log("Random data sucessful :)))")
            }   
        )
    }


}

export default ListImageContainer