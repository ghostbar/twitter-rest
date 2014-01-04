
MOCHA_OPTS= --check-leaks
REPORTER = spec

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--globals setImmediate,clearImmediate \
		$(MOCHA_OPTS) \
		test/test-*.js

docs:
	docco --layout linear {index.js,*/*.js}

clean:
	rm -rf docs/

.PHONY: test
