from flask import render_template

from app import app

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/products')
def products():
  return {
      '1': {
        'itemId': '1',
        'itemName': 'Strawberry Cake',
        'itemImgUrl': (
            'https://i.ytimg.com/vi/VYoQmLwMkLs/hqdefault.jpg?'
            'sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&'
            'rs=AOn4CLBU7p0U07HM1UywfPlCczLwL5haZg'),
        'tutorialIframe': (
            '<iframe width="560" height="315"'
            'src="https://www.youtube.com/embed/VYoQmLwMkLs" frameborder="0"'
            'allow="accelerometer; autoplay; encrypted-media; gyroscope;'
            'picture-in-picture" allowfullscreen></iframe>')
      },
      '2': {
        'itemId': '2',
        'itemName': 'Pâte à choux',
        'itemImgUrl': (
            'https://i.ytimg.com/vi/weIE6ePtzpI/hqdefault.jpg?'
            'sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&'
            'rs=AOn4CLDMmQxKEfI7chs6WZYFGaLB-Wr1CA'),
        'tutorialIframe': (
            '<iframe width="560" height="315"'
            'src="https://www.youtube.com/embed/weIE6ePtzpI" frameborder="0"'
            'allow="accelerometer; autoplay; encrypted-media; gyroscope;'
            'picture-in-picture" allowfullscreen></iframe>')
      }
  }
