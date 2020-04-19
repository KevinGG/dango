import os

import stripe
from flask import render_template, request

from app import app


stripe_keys = {
    'secret_key': os.environ['SECRET_KEY'],
    'publishable_key': os.environ['PUBLISHABLE_KEY'],
}

stripe.api_key = stripe_keys['secret_key']

@app.route('/pay')
def pay():
  return render_template('payment.html', key=stripe_keys['publishable_key'])


@app.route('/charge', methods=['POST'])
def charge():
  amount = 500

  customer = stripe.Customer.create(
      email = 'customer@example.com',
      source = request.form['stripeToken']
  )

  charge = stripe.Charge.create(
      customer=customer.id,
      amount=amount,
      currency='usd',
      description='Flask Charge'
  )

  return render_template('charge.html', amount=amount/100)

