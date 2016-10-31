require 'faraday_middleware'

uri =
  case
  when Rails.env.development?
    'localhost'
  end

port =
  case
  when Rails.env.development?
    9292
  end

Her::API.setup url: "http://#{uri}:#{port}" do |c|
  # Request
  c.use FaradayMiddleware::EncodeJson

  # Response
  c.use Her::Middleware::DefaultParseJSON
  

  # Adapter
  c.use Faraday::Adapter::NetHttp

  c.use Her::Middleware::AcceptJSON
end
