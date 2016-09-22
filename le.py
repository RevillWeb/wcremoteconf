import webapp2

class LetsEncryptHandler(webapp2.RequestHandler):
    def get(self, challenge):
        self.response.headers['Content-Type'] = 'text/plain'
        responses = {
                    'c1': '',
                    'c2': ''
                }
        self.response.write(responses.get(challenge, ''))

app = webapp2.WSGIApplication([
    ('/.well-known/acme-challenge/([\w-]+)', LetsEncryptHandler)
], debug=True)