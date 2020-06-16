const initState = {
    projects:[
        {id:'1',title:'help me find a ender dragon',content:'blah blah'},
        {id:'2',title:'help me find a diamond',content:'blah blah'},
        {id:'3',title:'help me find a forest mansion',content:'blah blah'}

    ]
}

const projectReducer = (state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('project created',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Create Project Error',action.err);
            return state;
        default:
            return state;

    }
}

export default projectReducer