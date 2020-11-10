require "webspicy"
require "finitio"
require "finitio/generation"
require "faker"
require "json"
require_relative "fixtures"

Finitio.stdlib_path(Path.dir/"schema")

Webspicy::Configuration.new(Path.dir) do |c|

  def install_seeds
    if url = ENV['SEED_SERVICE_URL']
      result = HTTP.post(url, body: "id=test")
      throw "Unable to install seed: #{result.inspect}" if (result.status < 200 || result.status >= 400)
    end
  end

  c.before_all do |c|
    install_seeds
  end

  c.around_each do |tc, &bl|
    bl.call
    unless ["GET", "OPTIONS"].include?(tc.service.method)
      install_seeds
    end
  end

  c.host = ENV['API_BASE'] || "http://127.0.0.1"
end
