import xml.etree.ElementTree as etree
import json
import sys
from urllib.request import urlopen
from collections import OrderedDict


def Paper(title):

    paper = OrderedDict()

    url = "http://api.dbpia.co.kr/v2/search/search.xml"
    url += "?searchall=%s&target=se&key=33eed93f386c21071521f722ae188efa" % title
    u = urlopen(url)

    tree = etree.parse(u)
    root = tree.getroot()

    paper["paper"] = []
    totalcount = int(root[0][1].text)
    if(totalcount > 20):
        totalcount = 20

    for i in range(0, totalcount, 1):
        if root[1][0][i][8].text == 'Y':
            paper["paper"].append({
                "title": root[1][0][i][1].text,
                "author": root[1][0][i][2][0][2].text,
                "publisher": root[1][0][i][3][1].text,
                "preview": root[1][0][i][9].text
            })
        else:
            paper["paper"].append({
                "title": root[1][0][i][1].text,
                "author": root[1][0][i][2][0][2].text,
                "publisher": root[1][0][i][3][1].text
            })

    return json.dumps(paper, ensure_ascii=False, indent="\t")

'''
 - Paper(title)
    input : string
    output : {
                "paper": [
                    {
                        "title" : string
                        "author": string
                        "publisher": string
                        "preview": string
                    },
                    {
                        "title" : string
                        "author": string
                        "publisher": string
                        "preview": string
                    } ... (title : 논문제목 / author : 저자 /
                           publisher : 출판사 / preview : p.1 미리보기
                           검색 갯수 : 10개)
'''