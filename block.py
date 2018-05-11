import hashlib as hasher
import datetime as date
import json

class Block:
  def __init__(self, index, timestamp, data, previous_hash):
    self.index = index
    self.timestamp = timestamp
    self.data = data
    self.previous_hash = previous_hash
    self.hash = self.hash_block()
    # self.proofOfWork = proof
  
  def hash_block(self):
    sha = hasher.sha256()
    sha.update( (
			str(self.index) + 
			str(self.timestamp) + 
			str(self.data) + 
			str(self.previous_hash)
    ).encode('utf-8') )
    return sha.hexdigest()

  def json(self):
    return json.dumps( {
      'index': self.index,
      'timestamp': self.timestamp.strftime("%B %d, %Y"),
      'data': self.data,
      # 'previous_hash': self.previous_hash,
      # 'hash': self.hash
    } )

def create_genesis_block():
  # Manually construct a block with
  # index zero and arbitrary previous hash
  return Block(0, date.datetime.now(), "Genesis Block", "0")

def next_block(last_block):
	this_index = last_block.index + 1
	this_timestamp = date.datetime.now()
	this_date = date.datetime.now()
	this_data = { "text": "Hey! I'm block " + str(this_index), "proof-of-work": this_index }
	this_hash = last_block.hash
	return Block(this_index, this_timestamp, this_data, this_hash)