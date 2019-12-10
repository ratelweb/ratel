from ratelweb.models import User, Bookmark

'''
이메일로 DB에서 유저 검색
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
이메일로 DB에 유저 추가
'''
def add_user(mail):
    if User.objects.filter(email=mail).exists():
        print("already exist")
    else:
        u = User.objects.create(email = mail)
        return u

'''
이메일로 DB에서 유저 삭제
input : email
'''
def delete_user(mail):
    entry = User.objects.filter(email=mail)
    entry.delete()



'''
이메일과 ISBN으로 DB에 즐겨찾기가 되어있는지 검색
input : email, isbn
'''
def search_bookmark(mail, isbn_i):
    u = User.objects.get(email=mail)

    if Bookmark.objects.filter(iden = u, bookmark = isbn_i).exists():
        return True
    else:
        return False

'''
이메일과 ISBN으로 DB에 해당 이메일에 ISBN 저장
input : email, isbn
'''
def add_bookmark(mail, isbn):
    user = User.objects.get(email=mail)

    if Bookmark.objects.filter(iden = user, bookmark = isbn).exists():
        print("already exist")
    Bookmark.objects.create(iden = user, bookmark = isbn)

'''
이메일과 ISBN으로 DB에 해당 데이터 삭제
input : email, isbn
output : True : 삭제 성공      False : 삭제 실패
'''
def delete_bookmark(mail, isbn):
    user = User.objects.get(email=mail)

    Bookmark.objects.filter(iden = user, bookmark = isbn).delete()


'''
이메일로 즐겨찾기 한 모든 ISBN 반환
input : email
output : 
'''
def find_isbn(mail):
    u = User.objects.get(email=mail)
    bookmark_set = Bookmark.objects.filter(iden = u)
    return bookmark_set