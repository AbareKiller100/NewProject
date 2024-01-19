const {Messages, Users, Instructors}= require('../../db');

const createNewMessage= async(chatForm)=>{
    const {content, isSent}=chatForm
    if(!content){
        throw new Error('Mensaje vacío.');
    }

    const newMessage= await Messages.create(chatForm);

    if(chatForm.user){
        const user= await Users.findOne({where: {email: chatForm.user}})
        if(!user){
            throw new Error('Eeste usuario no existe')
        } else{
            await newMessage.setUser(user);
        }
    } else if(chatForm.instructor){
        const instructor= await Instructors.findOne({where: {email: chatForm.instructor}})
        if(!instructor){
            throw new Error('Eeste instructor no existe')
        } else{
            await newMessage.setInstructor(instructor);
        }
    }

    return newMessage;
}