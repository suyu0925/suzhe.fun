import requests
import os
from bs4 import BeautifulSoup
from pymongo import MongoClient

result_url = 'https://ks.wjx.top/wjx/join/completemobile2.aspx?activity=17683323&joinactivity=101597588060&jidx=76073&tv=20&jpm=2&rname=%E6%82%A8%E7%9A%84%E5%A7%93%E5%90%8D'
html_file = './data/result.html'


def test_mongo():
  client = MongoClient('mongodb://localhost:27017/')
  db = client.pdep
  collection = db.question
  doc = collection.find_one({})
  print(doc)
  client.close()

def main():
  if not os.path.exists(html_file):
  # if True:
    get = requests.get(result_url)
    with open(html_file, 'w', encoding='utf8') as f:
      f.write(str(get.content, 'utf8'))
    html = get.content
  else:
    with open(html_file, 'r', encoding='utf8') as f:
      html = f.read()

  bs = BeautifulSoup(html, 'lxml')
  items = bs.find_all('div', 'data__items')
  for item in items:
    id = item.get('topic')
    tit = item.find('div', 'data__tit')
    label = tit.find('label')
    if label == None:
      continue
    subject = label.next_sibling.string
    key = item.find('div', 'data__key')
    font = key.find('font')
    answer = font.next_sibling.string

    question = {
      'id': id,
      'subject': subject.strip(),
      'answer': answer.strip()
    }
    print(question)
    # text = tit.label.text
    # string = tit.string
    # print('id', id, 'text', text, 'string', string)


if __name__ == "__main__":
  main()
