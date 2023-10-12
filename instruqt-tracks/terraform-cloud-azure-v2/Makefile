


all: clean_assignment_md

clean_assignment_md:
	@for f in $(wildcard [0-9][0-9]-*/assignment.md); do sed -e '/^id: /d' -i '' $${f}; done

