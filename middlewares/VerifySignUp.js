const db = require("./../model/index");
const User = db.user;
const Roles = db.Roles;



let checkDuplicateUserName = async (req,res,next) => {
    let user = await User.findOne({
        where: {
            username: req.body.username,
        },
    });

    if(user){
        res.status(400).json({
            message: "User already exist",
        });
        return;
    }
    next();
};

checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
      for (let i = 0; i < req.body.roles.length; i++) {
        if (!Roles.includes(req.body.roles[i])) {
          res.status(400).send({
            message: "Failed! Role does not exist = " + req.body.roles[i],
          });
          return;
        }
      }
    }
    next();
  };

const verifySignUp = {
    checkDuplicateUserName: checkDuplicateUserName,
    checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignUp;