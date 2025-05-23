const pool = require("./pool");

async function validateMember(member_username){
    return  await pool.query("Select member_id,member_username,member_password from members where member_username=$1",[member_username]);
}

async function validateId(member_id){
    return  await pool.query("Select member_id,member_username,member_password from members where member_id=$1",[member_id]);
}

async function getAllMembersMessages(){
    const {rows} = await pool.query("select a.member_username,title,message,message_date from members a left join messages b on a.member_id =b.user_id;");
    return rows;
}

async function getAllUsername(member_username){
    const result= await pool.query('select member_username from members where member_username=$1',[member_username]);
    return result.rows[0];
}

async function insertNewMember(member_name,member_last_name,member_username,member_password){
    await pool.query('Insert into members (member_name,member_last_name,member_username,member_password) values ($1,$2,$3,$4)',[member_name,member_last_name,member_username,member_password]);
}

async function insertNewMessage(title,message,user_id){
    await pool.query('Insert into messages(title,message,user_id) values ($1,$2,$3)',[title,message,user_id]);
}


module.exports={
    getAllMembersMessages,
    getAllUsername,
    insertNewMember,
    validateMember,
    insertNewMessage,
    validateId
}