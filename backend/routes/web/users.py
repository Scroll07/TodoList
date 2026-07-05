from fastapi import APIRouter

web_users = APIRouter()

@web_users.post("/web/login")
def post_web_login():
    return {}

@web_users.post("/web/register")
def post_web_register():
    return {}

@web_users.post("/web/logout")
def post_web_logout():
    return {}
