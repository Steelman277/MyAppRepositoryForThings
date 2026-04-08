thunk = balatro
local thunk
function thunk.load(filename)
  local file = love.filesystem.newFile(filename)
  file:open("r")
  local data = file:read()
  file:close()
  return data
end