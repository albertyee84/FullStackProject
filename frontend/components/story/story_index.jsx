import React from 'react';
import StoryIndexItem from './story_index_item';
import StoryForm from './story_index_form';

export default class StoryIndex extends React.Component{
    constructor(props){
        super(props);
        this.drag = this.drag.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
        this.drop = this.drop.bind(this);
    }

    componentDidMount(){
        this.props.requestAllStories();
    }
    allowDrop(ev){
        ev.preventDefault();
    }

    drag(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    render(){
        const { createStory, updateStory, deleteStory} = this.props;
        let projectStories = this.props.stories.filter(story => story.project_id === this.props.projectId);

        return(
            <div className="Body">
                <div className="storyCurrent" onDrop={this.drop} onDragOver={this.allowDrop} id="div1">
                    Current
                    {
                    projectStories.map(
                        story =>
                            <StoryIndexItem 
                                story={story}
                                key={story.id}
                                createStory={createStory}
                                updateStory={updateStory}
                                deleteStory={deleteStory}
                                projectId={this.props.projectId}
                                requestorId={this.props.requestorId}
                                draggable={true}
                                drag={this.drag}
                                drop={this.drop}
                                allowDrop={this.allowDrop}
                                id="drag1"
                            />
                        )   
                    }
                    <StoryForm
                        createStory={createStory}
                        updateStory={updateStory}
                        deleteStory={deleteStory}
                        projectId={this.props.projectId}
                        requestorId={this.props.requestorId} />
                    <div>
                        {this.props.errors}
                        <br/>
                    </div>
                </div>
                <div className="Icebox" onDrop={this.drop} onDragOver={this.allowDrop} id="div2">
                    IceBox
                    <div draggable={true} onDragStart={this.drag} id="drag1">Drag Me</div>
                </div>
            </div>
        );
    }
}