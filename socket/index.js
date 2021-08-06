const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000",
    },
});

const users = [];

const addUser = (_id_user, socketId) => {
    !users.some((user) => user._id_user === _id_user) &&
    users.push({ _id_user, socketId });
};

const removeUser = (socketId) => {
    const index = users.findIndex(user => user.socketId === socketId);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

const getUser = (_id_user) => {
    return users.find((user) => user._id_user === _id_user);
};

io.on("connection", (socket) => {
    //when connect
    console.log("a user connected.");

    //take userId and socketId from user
    socket.on("addUser", (_id_user) => {
        addUser(_id_user, socket.id);
        io.emit("getUsers", users);
    });

    //send and get message
    socket.on("sendMessage", ({ _id_sender, _id_receiver, text }) => {
        const user = getUser(_id_receiver);
        if(user){
            io.to(user.socketId).emit("getMessage", {
                _id_sender,
                text,
            });
        }
    });

    //when disconnect
    socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});
