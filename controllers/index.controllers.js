indexCtrl={};

indexCtrl.contactos=(req,res)=>{
    res.render('contactos',{title:'Contacts'})
}

indexCtrl.home=(req,res)=>{
    res.render('index',{title:'home'})
};

indexCtrl.about=(req,res)=>{
    res.render('about',{title:'about'})
};

indexCtrl.editNote=(req,res)=>{
    res.render('notes/edit-note',{title:'edits'})
};

indexCtrl.renderLguin=(req,res)=>{
    res.render('user/loguin',{title:'loguin'})
}


module.exports=indexCtrl;