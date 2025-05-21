const pool = require("./pool");

async function getAllMembers(){
    const {rows}= await pool.query("Select * from members");
    return rows;
}

async function getAllMembersMessages(){
    const {rows} = await pool.query("Select * from messages");
    return rows;
}

async function getAllUsername(member_username){
    const result= await pool.query('select member_username from members where member_username=$1',[member_username]);
    return result.rows[0];
}

async function insertNewMember(member_name,member_last_name,member_username,member_password){
    await pool.query('Insert into members (member_name,member_last_name,member_username,member_password) values ($1,$2,$3,$4)',[member_name,member_last_name,member_username,member_password]);
}


module.exports={
    getAllMembers,
    getAllMembersMessages,
    getAllUsername,
    insertNewMember
}