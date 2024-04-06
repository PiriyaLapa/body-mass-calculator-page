import { Component,ReactNode} from 'react'

 class IconColectionsMain extends Component {

    public HealthyIcon(){
        return <div>

        </div>
    }
  render() {
    return (
        <div>
            <h1>IconMain</h1>
        </div>
    )
  }
}

// Test to deploy

class IConCollectionsFooter extends Component{
    render():ReactNode {
        return(
            <div>
                <h1>IconFoote</h1>
            </div>
        )
    }
} 

export {IconColectionsMain, IConCollectionsFooter};