from ratelweb.models import User, Bookmark

'''
기능 : 이메일로 DB에서 유저 검색
(회원 가입 할 때 이미 존재하는 회원인지 검사할 때 사용)
input : email
output : True : 존재      False : 없음
'''

def search_user(mail):
    entry = User.objects.filter(email = mail)
    if entry.exists():
        return True
    else:
        return False

'''
기능 : 이메일로 DB에 유저 추가
(회원가입 할 때 사용, 이미 회원가입 되어있으면 "already exist" 출력됨)
input : email
output : User Table의 추가된 유저 쿼리셋(사용할 일 없을듯??)
'''
def add_user(mail, pwd):
    if User.objects.filter(email=mail).exists():
        print("already exist")
    else:
        u = User.objects.create(email = mail, password = pwd)
        return u

'''
기능 : 이메일, password로 DB에서 검사
'''
def check_login(mail, pwd):
    entry = User.objects.get(email = mail)
    if entry.password == pwd:
        return True
    else:
        return False

'''
기능 : 이메일로 DB에서 유저 삭제
(회원탈퇴 할 때 사용)
input : email
'''
def delete_user(mail):
    entry = User.objects.filter(email=mail)
    entry.delete()



'''
기능 : 이메일과 ISBN으로 DB에 즐겨찾기가 되어있는지 검색
input : email, isbn
output : 즐겨찾기 되어있으면 True, 안되어있으면 False
'''
def search_bookmark(mail, isbn_i):
    u = User.objects.get(email=mail)

    if Bookmark.objects.filter(iden = u, bookmark = isbn_i).exists():
        return True
    else:
        return False

'''
기능 : 이메일과 ISBN으로 DB에 해당 이메일에 ISBN 저장
(즐겨찾기 할 때 사용, 이미 즐겨찾기 되어있으면 "already exist" 출력됨)
input : email, isbn
'''
def add_bookmark(mail, isbn):
    user = User.objects.get(email=mail)

    if Bookmark.objects.filter(iden = user, bookmark = isbn).exists():
        print("already exist")
    Bookmark.objects.create(iden = user, bookmark = isbn)
    return True

'''
기능 : 이메일과 ISBN으로 DB에 해당 데이터 삭제
(즐겨찾기 해제 할 때 사용)
input : email, isbn
'''
def delete_bookmark(mail, isbn):
    user = User.objects.get(email=mail)

    Bookmark.objects.filter(iden = user, bookmark = isbn).delete()


'''
기능 : 이메일로 즐겨찾기 한 모든 ISBN 반환
(return 받은 값 그대로 정식이 책 추천 함수에 넣으면 됨)
input : email
output : 해당 email의 유저가 즐겨찾기한 모든 ISBN (사이에 ;넣어서)
'''
def find_isbn(mail):
    list = ""
    u = User.objects.get(email=mail)
    bookmark_set = Bookmark.objects.filter(iden = u)
    for p in bookmark_set:
        if (p != bookmark_set.first()):
            list += ";"
        list += p.bookmark

    return list