import {
    Container
} from 'unstated';
import data from '../data/data';
import {AsyncStorage} from 'react-native'

type ListImageState = {
    data: object,
    listFavo:object,
    isSelected: string

};

class ListImageContainer extends Container < ListImageState > {
   
    constructor(props)
    {
        super(props)
        this.state = {
            data: data,
            listFavo:[],
            isSelected: null
        };

        this.getList_Favo_From_Storage()
    }
  
    getList_State = () => 
    {
        let objReturn = {
            data: this.state.data,
            isSelected: this.state.isSelected,
            listFavo : this.state.listFavo
        }
        return objReturn
    }

    setImg_Seclected = (newState) => 
    {
        let {
            isSelected
        } = newState

        if (isSelected) {
            this.setState({
                isSelected: isSelected
            }, () => {
                console.log("Is Selected - Update !",this.state.isSelected)
            })
            return true
        }
        return false
    }

    randomList_Data = () => 
    {
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

    setImg_ListFavo = (item) => 
    {
        let arrTemp = []
        if ( item )
        {   
            if (typeof this.state.listFavo !== 'undefined' &&  this.state.listFavo.length > 0)
            {
                arrTemp = this.state.listFavo.map((item)=>{return(item)})
                let arrCheck = this.state.listFavo.filter((itm)=>{return(itm.uri===item.uri)})
                console.log("CHECK",arrCheck)
                if(typeof arrCheck !== 'undefined' &&  arrCheck.length > 0)
                {
                    return -1
                }
            }            
            arrTemp.push(item)
            this.setState({
                listFavo:arrTemp
            },()=> 
            {
                this.saveList_Favo_To_Storage(arrTemp)
                console.log("List Favo Updated ", this.state.listFavo)
            })
            return 1
        }
        return 0
      
    }

    saveList_Favo_To_Storage = async (list) => 
    {
        let str_listFavo = JSON.stringify(list)
        try {
            await AsyncStorage.setItem('@List_Favo:key', str_listFavo);
        } catch (error) {
            console.log("Error Save List Favo",error)
            return false
        }
        return true 

    }

    getList_Favo_From_Storage = async () => 
    {
        let str_ListFavo
        try {
            str_ListFavo =  await AsyncStorage.getItem('@List_Favo:key');
            if(str_ListFavo && str_ListFavo.indexOf("uri")!==-1)
            {
                let arr_listFavo = JSON.parse(str_ListFavo)
                this.setState(
                    {
                       listFavo: arr_listFavo
                    }, () => 
                    {
                        console.log("List Favo Storage ", this.state.listFavo)
                    }
                )
            }
            else
            {
                console.log("List Favo Storage Empty ")
            }
        } catch (error) {
            console.log("Error Get List Favo From Storage",error)
            return false
        }
        return true 

    }
}

export default ListImageContainer