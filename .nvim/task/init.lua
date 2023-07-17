local core = require("core")

local overseer = require("overseer")

local scriptPath = core.file.root_path() .. "/.nvim/task/task.sh"

overseer.register_template({
	name = "run",
	builder = function()
		return {
			cmd = { scriptPath },
			args = { "run" },
			components = { "on_exit_set_status" },
		}
	end,
})

overseer.register_template({
	name = "build",
	builder = function()
		return {
			cmd = { scriptPath },
			args = { "build" },
			components = { "on_exit_set_status", "on_output_quickfix", "on_complete_notify" },
		}
	end,
})

overseer.register_template({
	name = "test",
	builder = function()
		return {
			cmd = { scriptPath },
			args = { "test" },
			components = { "on_exit_set_status", "on_output_quickfix", "on_complete_notify" },
		}
	end,
})

overseer.register_template({
	name = "doc",
	builder = function()
		return {
			cmd = { scriptPath },
			args = { "doc" },
			components = { "on_exit_set_status", "on_complete_notify" },
		}
	end,
})

overseer.register_template({
	name = "export",
	builder = function()
		return {
			cmd = { scriptPath },
			args = { "export" },
			components = { "on_exit_set_status", "on_complete_notify" },
		}
	end,
})

overseer.register_template({
	name = "lint",
	builder = function()
		return {
			cmd = { scriptPath },
			args = { "lint" },
			components = { "on_exit_set_status", "on_complete_notify" },
		}
	end,
})

overseer.register_template({
	name = "test-coverage",
	builder = function()
		return {
			cmd = { scriptPath },
			args = { "test-coverage" },
			components = { "on_exit_set_status", "on_complete_notify" },
		}
	end,
})

overseer.register_template({
	name = "package",
	builder = function()
		return {
			cmd = { scriptPath },
			args = { "package" },
			components = { "on_exit_set_status", "on_complete_notify" },
		}
	end,
})

overseer.register_template({
	name = "clean",
	builder = function()
		return {
			cmd = { scriptPath },
			args = { "clean" },
			components = { "on_exit_set_status", "on_complete_notify" },
		}
	end,
})
