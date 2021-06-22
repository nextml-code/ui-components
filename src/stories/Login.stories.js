import React from "react";
import { Login } from "..";

export default {
  title: "Login",
  component: Login,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Login {...args} />;

export const Primary = Template.bind({});

/*
import uvicorn

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/auth/user")
async def main():
    # return {"name": "jim", "permissions": ["foo"]}
    raise HTTPException(status_code=401, detail="Item not found")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=7007)
*/

Primary.args = {
  onChange: console.log,
  endpoint: "http://localhost:7007/auth",
};
